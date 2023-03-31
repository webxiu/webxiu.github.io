const fs = require('fs');
const path = require('path');

/** 读文件 */
const readFile = (path) => {
    const data = fs.readFileSync(path);
    const html = data.toString();
    return html;
};

/** 写文件 */
const writeFile = (path, data) => {
    fs.writeFileSync(path, data, { encoding: 'utf-8' });
};

/** 获取某个目录下的所有文件路径集合
 * option:
 *  rootPath 跟路径
 *  exclude: 排除目录
 *  include: 包含文件
 */
const getAllPaths = (option) => {
    const { rootPath, exclude, include } = option
    const dirFileObj = []
    const findJsonFile = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach((name) => {
            const fPath = path.join(dir, name);
            const stat = fs.statSync(fPath);
            if (stat.isDirectory()) {
                if (!exclude.includes(name)) {
                    findJsonFile(fPath);
                }
            } else if (stat.isFile()) {
                const exts = name.split('.')
                const ext = exts[exts.length - 1]
                if (include.includes(ext)) {
                    return
                }
                dirFileObj.push({ name: name, path: fPath })
            }
        });
    };
    findJsonFile(rootPath);
    return dirFileObj;
};
/** 按文件夹分类, 返回路径各组文件路径(只分类一层文件夹), 过滤了第一层文件, 只扫描下面的目录
 * option:
 *  rootPath 跟路径
 *  exclude: 排除目录
 *  include: 包含文件
 */
const getDirPaths = (option) => {
    const { rootPath, exclude, include } = option
    const dirFileObj = {};
    const findJsonFile = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach((name) => {
            const fPath = path.join(dir, name);
            const stat = fs.statSync(fPath);
            const keys = Object.keys(dirFileObj);
            if (stat.isDirectory()) {
                if (!exclude.includes(name)) {
                    // 判断是否为当前目录的子目录
                    const hasChildDir = keys.some(dir => fPath.split('/').includes(dir))
                    if (hasChildDir) {
                        findJsonFile(fPath);
                    } else {
                        dirFileObj[name] = [];
                        findJsonFile(fPath);
                    }
                }
            } else if (stat.isFile()) {
                // 过滤文件后缀不符合的
                const exts = name.split('.')
                const ext = exts[exts.length - 1]
                if (!include.includes(`.${ext}`)) {
                    return
                }
                // 遍历所有key(目录分类)数组, 添加到对应的数组中
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    const dirPath = path.parse(path.dirname(fPath));
                    if (fPath.split('/').includes(key)) { // 路径下子目录
                        dirFileObj[key].push(fPath);
                    } else if (dirPath.name === key) {// 路径下的文件
                        dirFileObj[key].push(fPath);
                        break;
                    }
                }
            }
        });
    };
    findJsonFile(rootPath);
    return dirFileObj;
};

/** 递归某个目录, 获取子目录中的所有文件路径(层级不限) */
const getJsonFiles = (rootPath) => {
    const filePaths = [];
    const findJsonFile = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach((name) => {
            const fPath = path.join(dir, name);
            const stat = fs.statSync(fPath);
            if (stat.isDirectory()) {
                findJsonFile(fPath);
            } else if (stat.isFile()) {
                filePaths.push(fPath);
            }
        });
    };
    findJsonFile(rootPath);
    return filePaths;
};

module.exports = {
    readFile,
    writeFile,
    getAllPaths,
    getDirPaths,
    getJsonFiles
}
