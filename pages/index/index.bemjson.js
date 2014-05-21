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
        {elem: 'js', url: '_index.js'}
    ]
})
