import React from 'react';

const ImageCard = ({ src, alt, title }) => {
    return (
        <div className="relative overflow-hidden">
            <img
                className="h-full w-full rounded-lg transition-transform duration-300"
                src={src}
                alt={alt}
            />
            <div className="absolute h-full w-full inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h3 className="text-xl">{title}</h3>
            </div>
        </div>
    );
};

const ImageGallery = () => {
    const images = [
        { src: "https://d2jdgazzki9vjm.cloudfront.net/tourist-places/images/tourist-places-in-uttarakhand2.jpg", title: "A sacred Hindu pilgrimage site, Haridwar is located at the confluence of the Ganges and Bhagirathi rivers. It's famous for its Ganga Aarti, a mesmerizing evening ritual." },
        { src: "https://static2.tripoto.com/media/filter/tst/img/375599/TripDocument/1493114257_badrinath_temple.jpg", title: "Char Dham site, Badrinath is dedicated to Lord Vishnu. The temple is located near the Alaknanda River and is surrounded by beautiful mountains." },
        { src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQUbCEoxzi5FkRtu_cr7rxU7E0vTuNr3tU6CxBIAImAVPPwJO5C4-Ou9Mjk6GY_", title: "Kedarnath is one of the Char Dham pilgrimage sites and is dedicated to Lord Shiva. The temple is situated at a high altitude in the Himalayas and offers breathtaking views." },
        { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ_EU4O45pxnAiBKuFeIpnrudpfsqCaYauiyjrt7kY3wUsAHh31D9L_ASpc5vfh", title: "India's first national park, Jim Corbett, is home to diverse wildlife, including tigers, elephants, and leopards. It's a popular destination for wildlife safaris and nature enthusiasts." },
        { src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXH0TApeAu7KAZ06dgLklvPk5enmANLsrx6--qco0Dw69JLNWDpxuYoLQmfiTi", title: "A UNESCO World Heritage Site, the Valley of Flowers is known for its vibrant wildflowers that bloom during the summer season. It's a paradise for nature lovers and photographers." },
        { src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgfv9eMeQ8WBoBPqP_eL5vZt6VKxK28tj8TAh_RykwOxohdyfoCCqSoJWUIs3m    ", title: "Mukteshwar is a small hill station known for its apple orchards and scenic views. It's a popular destination for nature walks and birdwatching." },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNtzc2eEx86OYUdnEnNYzQff2gf9LB_GwYsY35MQ5D9ofq_6WRR0wHINonSfnj", alt: "Image 4", title: "Chopta is a beautiful hill station known for its meadows, forests, and panoramic views of the Himalayas. It's a popular destination for trekking and camping." },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gXb02VEb-4UnsvegCkjC-5QCLsjkTql8aBhnTjt-AuLXlipcFSmELmrGD_8n", alt: "Image 4", title: "Kausani is a charming hill station offering breathtaking views of the Himalayas, including Nanda Devi and Trishul peaks. It's a peaceful retreat for nature lovers." },
        // Add more images as needed
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            {/* <h2 className="text-2xl font-bold text-center mb-6">Image Gallery</h2> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <ImageCard key={index} src={image.src} alt={image.alt} title={image.title} />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;