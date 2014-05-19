module.exports = function(config) {
    config.setLanguages(["ru"]);
    config.mode("development", function() {
        config.node("pages/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/file-copy"), { sourceTarget: "?.modules.js", destTarget: "_?.js" } ],
                [ require("enb/techs/file-copy"), { sourceTarget: "?.css", destTarget: "_?.css" } ]
            ]);
        });
    });
    config.mode("production", function() {
        config.node("pages/index", function(nodeConfig) {
            nodeConfig.addTechs([
                [ require("enb/techs/borschik"), { sourceTarget: "?.modules.js", destTarget: "_?.js", minify: true, freeze: false } ],
                [ require("enb/techs/borschik"), { sourceTarget: "?.css", destTarget: "_?.css", minify: true, freeze: false } ]
            ]);
        });
    });

    config.node("pages/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            require("enb/techs/bemdecl-from-bemjson"),
            require("enb/techs/deps-old"),
            require("enb/techs/files"),
            require('enb-bemxjst/techs/bemhtml'),
            require("enb/techs/html-from-bemjson"),

            require('enb-diverse-js/techs/browser-js'),
            [require('enb-modules/techs/prepend-modules'), {
                source: '?.browser.js',
                target: '?.modules.js'
            }],
            require('enb-roole/techs/css-roole')
        ]);
        nodeConfig.addTargets(["?.html", "_?.js", "_?.css"]);

        function getLevels() {
            return [
                'bower_components/bem-core/common.blocks',
                'bower_components/bem-core/desktop.blocks',
                'bower_components/bem-components/common.blocks',
                'bower_components/bem-components/desktop.blocks',
                'bower_components/bem-components/design/common.blocks',
                'bower_components/bem-components/design/desktop.blocks',
            ].map(function(l) { 
                return config.resolvePath(l); 
            });
        }
    });
};
