function CoverGuide(cover, target) {
  const body = document.body;
  const doc = document.documentElement;
  if (cover && target) {
    //target size
    const targetWidth = target.clientWidth;
    const targetHeight = target.clientHeight;
    //page size
    const pageWidth = doc.scrollWidth;
    const pageHeight = doc.scrollHeight;
    //offset of target
    const offsetTop = target.getBoundingClientRect().top + (body.scrollTop || doc.scrollTop);
    const offsetLeft = target.getBoundingClientRect().left + (body.scrollLeft || doc.scrollLeft);
    // set size and border-width
    cover.style.width = targetWidth + 'px';
    cover.style.height = targetHeight + 'px';
    cover.style.borderWidth = offsetTop + 'px ' + (
    pageWidth - targetWidth - offsetLeft) + 'px ' + (
    pageHeight - targetHeight - offsetTop) + 'px ' + offsetLeft + 'px';

    const isShow = !localStorage.getItem('showedGuide');
    if(isShow) {
      cover.style.display = 'block';
      localStorage.setItem('showedGuide', 'true');
    };

    const tipBlock = document.querySelector('.guide-tip-block');
    if(isShow) tipBlock.style.display = 'block';
    tipBlock.style.top = offsetTop - 100 + 'px';
    // if(tipBlock) {
    //   if((offsetLeft - 77) < 0) {
    //     tipBlock.style.left = 0 + 'px';
    //     document.querySelector('.guide-btn').style.marginLeft = ((body.clientWidth - 120) / 2)  - 0 + 'px';
    //   } else {
    //     tipBlock.style.left = offsetLeft - 77 + 'px';
    //     document.querySelector('.guide-btn').style.marginLeft = ((body.clientWidth - 120) / 2)  - (offsetLeft - 77) + 'px';
    //   }
    // }
    //resize
    if (!cover.isResizeBind) {
      window.addEventListener('resize', function() {
        CoverGuide(cover, target);
      });
      cover.isResizeBind = true;
    }
  }
}

export {
  CoverGuide
};
