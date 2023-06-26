const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname, './')

let ret = fs.readdirSync(dir)
let arr = ret.filter((v) => /^\d+\..+\.js$/.test(v))
let len = arr.length
let noDirs = ['DataStructure', '.git']
let list = []

const getDirs = (cb) => {
    fs.readdir('./', (err, files) => {
        (function iterator(i) {
            if (i == files.length) {
                return cb({ list, len })
            }
            fs.stat('./' + files[i], (err, stats) => {

                if (stats.isDirectory()) {
                    if (!noDirs.includes(files[i])) {
                        list.push(files[i])
                        let res = fs.readdirSync('./' + files[i])
                        let arr = res.filter((v) => /^\d+\..+\.js$/.test(v))
                        len += arr.length
                    }
                }
                iterator(i + 1)
            })
        })(0)
    })
}
getDirs(({ list, len }) => {
    console.log(`你刷了${len}个题`)
})

