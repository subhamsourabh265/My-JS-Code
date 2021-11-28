function deadLockInJS() {
    var loop = true,
    block = setTimeout(function(){loop = false}, 1);
    while(loop);
}