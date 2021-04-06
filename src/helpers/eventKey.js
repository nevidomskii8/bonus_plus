@HostListener('window:keydown', ['$event'])
keyPressed(ev: any) {
    let code = ev.key;
    console.log(ev);
    ev.preventDefault();

    switch (code) {
        case 'VK_DOWN':
        case 'ArrowDown': {
            code = 'down';
            break;
        }
        case 'VK_UP':
        case 'ArrowUp': {
            code = 'up';
            break;
        }
        case 'VK_LEFT':
        case 'ArrowLeft': {
            code = 'left';
            break;
        }
        case 'VK_RIGHT':
        case 'ArrowRight': {
            code = 'right';
            break;
        }
        case 'VK_ACCEPT':
        case 'VK_ENTER':
        case 'Enter': {
            code = 'ok';
            break;
        }
    }

    this.listener.keyPressed({
        key: code
    });
}