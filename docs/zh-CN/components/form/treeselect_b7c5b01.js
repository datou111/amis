amis.define('docs/zh-CN/components/form/treeselect.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TreeSelect 树形选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "TreeSelect 树形选择器",
    "icon": null,
    "order": 60,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" href=\"#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>仅展示选中节点文本信息</h2><p>设置<code>hideNodePathLabel: true</code>，可以隐藏选择框中已选择节点的祖先节点（ancestor）的<code>labelField</code>字段值，仅展示当前选中节点的<code>labelField</code>字段值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree1\",\n      \"label\": \"展示已选择节点的祖先节点的文本信息\",\n      \"value\": \"1,6,7\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"divider\"\n    },\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree2\",\n      \"label\": \"仅展示已选择节点的文本信息\",\n      \"value\": \"1,6,7\",\n      \"multiple\": true,\n      \"hideNodePathLabel\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>只允许选择叶子节点</h2><blockquote>\n<p>1.8.0 及以上版本</p>\n</blockquote>\n<p>在单选时，可通过 <code>onlyLeaf</code> 可以配置只允许选择叶子节点</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"onlyLeaf\": true,\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"value\": \"61\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"value\": \"62\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-\" href=\"#%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>如何让某些节点无法点？</h2><p>只需要对应的节点没有 value 就行，比如下面例子的目录节点都无法点，只能点文件节点</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>更多用法，见 <a href=\"./input-tree\">InputTree</a></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>hideNodePathLabel</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否隐藏选择框中已选择节点的路径 label 信息</td>\n</tr>\n<tr>\n<td>onlyLeaf</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>只运行选择叶子节点</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td>value: <code>string</code> 更新后的数据</td>\n<td>选中值更改</td>\n</tr>\n<tr>\n<td>add</td>\n<td>value: <code>string</code> 新增节点信息</td>\n<td>新增选项</td>\n</tr>\n<tr>\n<td>edit</td>\n<td>value: <code>string</code> 编辑节点信息</td>\n<td>编辑选项</td>\n</tr>\n<tr>\n<td>delete</td>\n<td>value: <code>string</code> 删除节点信息</td>\n<td>删除选项</td>\n</tr>\n<tr>\n<td>loadFinished</td>\n<td>value: <code>json</code> 懒加载返回的数据</td>\n<td>懒加载完成触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td>-</td>\n<td>输入框失去焦点</td>\n</tr>\n<tr>\n<td>focus</td>\n<td>-</td>\n<td>输入框获取焦点</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清除数据</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>重置数据</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "仅展示选中节点文本信息",
          "fragment": "%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "fullPath": "#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "level": 2
        },
        {
          "label": "只允许选择叶子节点",
          "fragment": "%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "如何让某些节点无法点？",
          "fragment": "%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-",
          "fullPath": "#%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
