const frames = [];
const button = document.querySelector("button");
const select = document.querySelector("select");
const canvas = document.querySelector("canvas");
const inputVid = document.querySelector("input");
const ctx = canvas.getContext("2d");

async function onClick(evt) {
    if (HTMLVideoElement.prototype.requestVideoFrameCallback) {
        let stopped = false;
        const video = await getVideoElement();
        const drawingLoop = async (timestamp, frame) => {
            const bitmap = await createImageBitmap(video);
            const index = frames.length;
            frames.push(bitmap);
            select.append(new Option("Frame #" + (index + 1), index));

            if (!video.ended && !stopped) {
                video.requestVideoFrameCallback(drawingLoop);
            } else {
                video.pause();
                select.disabled = false;
            }
        };
        video.requestVideoFrameCallback(drawingLoop);
        button.onclick = (evt) => stopped = true;
        button.textContent = "stop";

    } else {
        console.error("your browser doesn't support this API yet");
    }
    return frames;
};

select.onchange = (evt) => {
    const frame = frames[select.value];
    canvas.width = frame.width;
    canvas.height = frame.height;
    ctx.drawImage(frame, 0, 0);
};

async function getVideoElement() {

    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function (evt) {
        // console.log( reader.result );
        const url = reader.readAsText(file);
        console.log(url);
    }, false);


    const video = document.createElement("video");
    video.muted = true;
    video.type = "video/mp4";
    video.src = url;
    document.body.append(video);
    await video.play();
    return video;
}