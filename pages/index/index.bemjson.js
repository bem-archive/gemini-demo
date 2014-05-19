({
    block: 'page',
    head: [
        {elem: 'css', url: '_index.css', ie: false}
    ],
    attrs: {
        style: 'margin: 20px'
    },
    content: [
        {
            block: 'button',
            mods: {size: 'm', theme: 'normal'},
            text: 'Click me!'
        },
        {block: 'i-jquery', mods: {version: '1.8.3'}},
        {elem: 'js', url: '_index.js'}
    ]
})
