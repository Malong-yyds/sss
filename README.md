# vue3cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to commit

> 建议全局安装commitizen,我们只要在终端运行`git cz`即可


如何进行规范的代码提交是每个团队必须重视的问题，有利于团队协作和仓库质量的提升

我们以往的提交方式为`git add ${file_url}`添加文件, 然后`git commit -m, '${commit message}'`

现在引入全新提交方式，在`git add ${file_url}`添加文件之后，我们终端运行`npm run commit`或`git cz`(需要全局安装commitizen，运行`npm install -g commitizen`)


- 会出现以下三个步骤:
  - 选择类型
  ![提交规范](./docs/git_cz.png)
  - 填写commit信息
  ![提交规范](./docs/git_message.png)
  - 确定提交（回车确定)
  ![提交规范](./docs/git_assert.png)
