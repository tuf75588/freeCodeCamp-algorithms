function spinalCase(str) {
    let spinal = str.replace(/(?!^)([A-Z])/g,  ' $1')
            .replace(/[_\s]+(?=[na-zA-Z])/g, '-').toLowerCase();
    return spinal
}

spinalCase('This Is Spinal Tap');
