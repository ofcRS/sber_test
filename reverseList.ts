interface Window {
    reverseList: () => void;
}

type ListElement = {
    next: ListElement | null;
    value: number;
};

const getTail = (
    head: number,
    tail: ListElement | null = null
): ListElement => ({
    value: head,
    next: tail,
});


window.reverseList = () => {
    let list = getTail(5, getTail(7, getTail(12, getTail(45))));

    let result = getTail(list.value);
    while (list.next !== null) {
        list = list.next;
        result = getTail(list.value, result);
    }

    console.log(result)
}