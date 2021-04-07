menuBlockSwitch(isLeft: boolean, next ?: any) {
    let focused = document.querySelector('.focused');

    if (!next) {
        next = isLeft ? focused.previousElementSibling : focused.nextElementSibling;

        if (!next || !next.classList.contains('focusable')) {
            let left_menu = document.querySelector('.left_menu');
            if (isLeft && focused != left_menu)
                next = left_menu;
            else if (!isLeft && focused == left_menu)
                next = document.querySelector('.center_menu');
            else
                return;
        }

        if (!next)
            return;
    }

    focused.classList.remove('focused');
    next.classList.add('focused');

    this.listener.menuBlockChanged({
        prev_menu: focused as HTMLDivElement,
        curr_menu: next as HTMLDivElement,
        selected_menu: this.currentSelectedMenu,
        direction: isLeft ? 'left' : 'right'
    });
}

menuActiveSwitch(isUp: boolean, menu: HTMLUListElement) {
    let active = menu.querySelector('.menu_item.active') as HTMLLIElement;

    active.classList.remove('active');

    let next = isUp ? active.previousElementSibling : active.nextElementSibling;

    if (!next)
        next = isUp ? menu.lastElementChild : menu.firstElementChild;

    if (next.classList.contains('no_active')) {
        if (next == menu.lastElementChild && !isUp)
            next = menu.firstElementChild;
        else if (next == menu.firstElementChild && isUp)
            next = menu.lastElementChild;
        else
            next = isUp ? next.previousElementSibling : next.nextElementSibling;
    }

    (next as HTMLElement).focus();
    next.classList.add('active');

    this.listener.menuChanged({
        selected_menu: this.currentSelectedMenu,
        menu: menu,
        menu_type: menu.classList.length > 1 ? menu.classList[1] : null
    });
}