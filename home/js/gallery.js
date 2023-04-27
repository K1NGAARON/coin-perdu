const images = [
    // {
    //     src: '/home/img/gallery/new/image1.jpg',
    // },
    {
        src: '/home/img/gallery/new/image2.jpg',
    },
    {
        src: '/home/img/gallery/new/image3.jpg',
    },
    {
        src: '/home/img/gallery/new/image4.jpg',
    },
    {
        src: '/home/img/gallery/new/image5.jpg',
    },
    {
        src: '/home/img/gallery/new/image6.jpg',
    },
    {
        src: '/home/img/gallery/new/image7.jpg',
    },
    {
        src: '/home/img/gallery/new/image8.jpg',
    },
    {
        src: '/home/img/gallery/new/image9.jpg',
    },
    {
        src: '/home/img/gallery/new/image10.jpg',
    },
    {
        src: '/home/img/gallery/new/image11.jpg',
    },
    {
        src: '/home/img/gallery/new/image12.jpg',
    },
    {
        src: '/home/img/gallery/new/image13.jpg',
    },
    {
        src: '/home/img/gallery/new/image14.jpg',
    },
    {
        src: '/home/img/gallery/new/image15.jpg',
    },
    {
        src: '/home/img/gallery/new/image16.jpg',
    },
    {
        src: '/home/img/gallery/new/image17.jpg',
    },
    {
        src: '/home/img/gallery/new/image18.jpg',
    },
    {
        src: '/home/img/gallery/new/image19.jpg',
    },
    {
        src: '/home/img/gallery/new/image20.jpg',
    },
    {
        src: '/home/img/gallery/new/image21.jpg',
    },
    {
        src: '/home/img/gallery/new/image22.jpg',
    },
    {
        src: '/home/img/gallery/new/image23.jpg',
    },
    {
        src: '/home/img/gallery/new/image24.jpg',
    },
    {
        src: '/home/img/gallery/new/image25.jpg',
    },
    {
        src: '/home/img/gallery/new/image26.jpg',
    },
    {
        src: '/home/img/gallery/new/image27.jpg',
    },
    {
        src: '/home/img/gallery/new/image28.jpg',
    },
    {
        src: '/home/img/gallery/new/image29.jpg',
    },
    {
        src: '/home/img/gallery/new/image30.jpg',
    },
    {
        src: '/home/img/gallery/new/image31.jpg',
    },
    {
        src: '/home/img/gallery/new/image32.jpg',
    },
    {
        src: '/home/img/gallery/new/image33.jpg',
    },
    // {
    //     src: '/home/img/gallery/new/image34.jpg',
    // },
];

function createGallery(e) {
    const target = document.querySelector('#sfeer-gallery');

    for (let i = 0; i < images.length; i++) {
        let template = `
            <div class="item">
                <img class="sfeer-img" src="${images[i].src}" alt="Coin Perdu Sfeerfoto">
            </div>
        `;
        target.insertAdjacentHTML('beforeend', template);
    };
};

$(document).ready(createGallery);