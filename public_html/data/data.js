var news = {"news": [
        {"id": 1, "heading": "LeBron sets tone at Cavs media day", "Date": "2014-09-27", "details": "INDEPENDENCE, Ohio -- The satellite trucks started lining up for a spot close to the Cleveland Cavaliers' training facility early Friday morning. A huge tent was erected onsite as a temporary media workroom to accommodate the hundreds of reporters on hand for LeBron James' official return to the Cavs. He never did have a news conference this summer, if you remember. So whatever party the city of Cleveland was going to throw to celebrate the return of its prodigal son had to be Friday.", "photo": "style/1.jpg"},
        {"id": 2, "heading": "Rajon Rondo breaks hand in fall", "Date": "2014-09-25", "details": "Boston Celtics point guard Rajon Rondo had surgery to repair a broken left hand and will miss the start of the regular season, the team announced Friday night.", "photo": "style/2.jpg"},
        {"id": 3, "heading": "LeBron: Patience is key for Cavs", "Date": "2014-09-22", "details": "INDEPENDENCE, Ohio -- While the Miami Heat ushered in their Big Three era with a grand stage and a dramatic opening four years ago, there was more of a soft-launch feel when the Cleveland Cavaliers introduced the league's latest superteam at media day Friday.", "photo": "style/3.jpg"},
        {"id": 4, "heading": "Jackson: Knicks can make playoffs", "Date": "2014-08-22", "details": "GREENBURGH, N.Y. -- New York Knicks president Phil Jackson believes that his team will make the playoffs this season in the revamped Eastern Conference.", "photo": "style/4.jpg"},
        {"id": 5, "heading": "Grizzlies sign F Michael Beasley", "Date": "2014-08-20", "details": "MEMPHIS, Tenn. -- The Memphis Grizzlies say free-agent forward Michael Beasley is among several additions to their training-camp roster.", "photo": "style/5.jpg"}

    ]};

function init() {
    load_data();
}

function $(id) {
    return document.getElementById(id);
}

function load_data() {
    var data = news["news"];
    var headline = "";
    var story_details = "";
    
    for (var i = 0; i < data.length; i++){
        headline += make_marquee(data[i], i); 
        story_details += make_story(data[i]);
    }
        $("news").innerHTML = headline;
        $("detail").innerHTML = story_details;
}

function make_marquee(data, i) {
    html = "";
    var x = i;
    html += "<p class='news_item' onclick='change_story("+ x +")'>" + " " + data.heading + "" + x +  " " + "</p>";
    html += "<img class='news_img' src='icons/NBA.jpg'>"; 
    return html;
}

function make_story(data) {
    var html = "";
    html += "<img class='news_photo' src='" + data["photo"] + "'>";
    html += "<p class='news_title'>" + data["heading"] + data["id"] + "</p>";
    html += "<p class='date'>" + data["Date"] + "</p>";
    html += "<p class='news_detail'>" + data["details"] + "</p>";
    return html;
}

function get_headline(x) {
    alert("this is x", x);
    document.getElementsByClassName("selected_headline")[0].className="news_item";
    html+="<div class='"+className+"' image-index='"+id+"' onclick='make_story(this)'>" + ""
    change_story(selected);
}


function change_story(headline) {
    var data = news["news"];
    var story_detail;
    story_detail += make_story(data[headline]);
    $("detail").innerHTML = story_detail;
//    var headline=selected?"selected_headline":"headline";
//    document.getElementsByClassName("selected_headline")[0].className="news_item";
//    headline.className="selected_headline";   
//        
//    return headline;
}

function toggle(el) {
    if (el.className !== "pause")
    {
        el.src = 'icons/pause.png';
        el.className = "pause";
        $("news").style.webkitAnimationPlayState = "";
    }
    else if (el.className === "pause")
    {
        el.src = 'icons/play.png';
        el.className = "play";
        $("news").style.webkitAnimationPlayState = "paused";
    }
    return false;
}
