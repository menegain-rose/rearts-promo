function carrousel() {
    
	var images15 = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images15.forEach(function(img,indice) {
        img.style.zIndex = images15.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images15,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (3*delta)+(2*d);
                         if (ind == 1) return (2*delta)+d;
                         if (ind == 2) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            return (4*delta)+(3*d);
        }
    });
}

function carrousel() {
    
    var images15 = document.querySelectorAll('.image15');
    let d = 2000;
    let delta = 1000;

    images15.forEach(function(img,indice) {
        img.style.zIndex = images15.length - indice;
    });

    let anim15 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim15.add({
        targets: images15,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (3*delta)+(2*d);
                         if (ind == 1) return (2*delta)+d;
                         if (ind == 2) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            return (4*delta)+(3*d);
        }
    });
}

function carrousel5Images() {
    
        var images155 = document.querySelectorAll('.image155');
        let d = 2000;
        let delta = 1000;
    
        images155.forEach(function(img,indice) {
            img.style.zIndex = images155.length - indice;
        });
    
        let anim155 = anime.timeline({
            loop: true,
            delay: 0
        });
    
        anim155.add({
            targets: images155,
            translateX: [{value: '500', duration: d},
                         {value: '-500', duration: 0, delay: function(img,ind) {
                             if (ind == 0) return (3*delta)+(2*d);
                             if (ind == 1) return (2*delta)+d;
                             if (ind == 2) return delta;
                             return 0;
                         }},
                         {value: '0', duration: function(img,ind) {
                             if (ind == 3) return 0;
                             return d;
                         }}],
            easing: 'linear',
            delay: function(img,ind) {
                if (ind == 0) return delta;
                if (ind == 1) return (2*delta)+d;
                if (ind == 2) return (3*delta)+(2*d);
                return (4*delta)+(3*d);
            }
        });
    }

    function carrousel3Images() {
        var images153 = document.querySelectorAll('.image153');
        let d = 2000;
        let delta = 1000;
    
        images153.forEach(function(img,indice) {
            img.style.zIndex = images153.length - indice;
        });
    
        let anim153 = anime.timeline({
            loop: true,
            delay: 0
        });
    
        anim153.add({
            targets: images153,
            translateX: [{value: '500', duration: d},
                         {value: '-500', duration: 0, delay: function(img,ind) {
                             if (ind == 0) return (2*delta)+d;
                             if (ind == 1) return delta;
                             return 0;
                         }},
                         {value: '0', duration: function(img,ind) {
                             if (ind == 2) return 0;
                             return d;
                         }}],
            easing: 'linear',
            delay: function(img,ind) {
                if (ind == 0) return delta;
                if (ind == 1) return (2*delta)+d;
                return (3*delta)+(2*d);
            }
        });
    }
