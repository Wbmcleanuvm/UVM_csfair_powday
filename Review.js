class MountainReviews {
    constructor(mountName, reviews){
        this.mountName = mountName;
        this.reviews = reviews;
    }
}
class Review
{
    constructor(reviewerName, rating, mountname, trailname){
        this.reviewerName = reviewerName;
        this.rating = rating;
        this.mountname = mountname;
        this.trailname = trailname;
        //this.comments = comments;
    }
    getReviewerName() {
        return this.reviewerName;
    }
    getRating() {
        return this.rating;
    }
    getComments() {
        return this.comments;
    }
    getTrailName() { 
        return this.trailname;
    }
}
function convertToReviews(reviewData){
    let add = "";
    let reviews = [];
    let rConst = [];
    let count = 0;
    let i = 0;
    while (i < reviewData.length){
        if (reviewData[i] == ","){  
            count++;
            i++;
            rConst.push(add);
            add = "";
        }
        else if (reviewData[i] == "["){
            i++;
        }
        else if (reviewData[i] == "]"){
            rConst.push(add);
            newReview = new Review(rConst[0], rConst[1], rConst[2], rConst[3]);
            reviews.push(newReview);
            count = 0;
            i++;
            rConst = [];
            add = "";
        }else{
            if (reviewData[i] == '"'){
            }else{
                add += reviewData[i];
            }
        }
        i++;

    }
    /* functionality test 
    let s = 0;
    while (s<reviews.length){
        console.log(reviews[s]);
        s++;
    }*/
   return reviews;
}
