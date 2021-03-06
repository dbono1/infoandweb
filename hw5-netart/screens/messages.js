

function add_messages(){
    dom_msg = document.getElementById("messages");
    dom_msg.innerHTML = "";

    var messages = parent.messages;
    var loop = Array(messages).length <= 10 ? 10 : Array(messages).length;
    new_innerHTML = "";

    for(i = 0; i < loop; i++)
    {
        if(i < messages.length)
        {
            var obj = messages[i];

            document.getElementsByClassName('message-preview-picture-content')[0].innerHTML = String(obj['name'][0]).toUpperCase();
            document.getElementsByClassName('message-preview')[0].children[0].innerHTML = String(obj['name']);
            document.getElementsByClassName('message-preview')[0].children[1].innerHTML = String(obj['content']);

            message_preview_container = document.getElementById('msg-preview').innerHTML;
            message_preview_template = message_preview_container.innerHTML;
            dom_msg.innerHTML += message_preview_container;
        }
        else{
            new_innerHTML += `
            <div class="message-container">
                <div class="new-message white"></div>
                <div class="message-preview-picture">
                </div>
                <div class="message-preview">
                </div>
            </div>`;

        }
    }

    dom_msg.innerHTML += new_innerHTML;

    var clickables = document.getElementsByClassName('msg-ctr-live')
    if(clickables.length > 1) {
        clickables[1].onclick = function(){
            window.location.href="message_window.html#" + "socrates";
        }
    }
}

function first_notif(){
    var messages = parent.messages;
    var notify = parent.notify;
    notify(parent.dialogue[0]);
    add_messages();
}

document.addEventListener("DOMContentLoaded", function(event) {
    add_messages();
});

window.onload = () => {
    console.log("loaded");
    setTimeout(first_notif, 7000);
}

