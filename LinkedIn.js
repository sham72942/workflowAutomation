function search(ariaLabel){ 
    var query = 'button[aria-label^=' + '"' + ariaLabel + '"' +']';
    return document.querySelectorAll(query);
}


//Easy apply to a job
var easyApply=search('Apply to');
if(easyApply.length>0){
    easyApply[0].click();
    var next=search('Continue to next step');
    while(next.length>0){
	next[0].click();
	next=search('Continue to next step');
	if(next.length>0) continue;
	else break;
    }

    var review=search('Review your application');
    if(review.length>0) review[0].click();
    var submit=search('Submit application');
    if(submit.length>0) submit[0].click();
    //Sleep for 500ms
    await new Promise(r => setTimeout(r, 1000));
    var dismiss=search('Dismiss');
    if(dismiss.length>0) dismiss[0].click();
}
