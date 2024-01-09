import React from 'react';

const CenteredIcon = ({ src, alt }) => {
    return (
        <div className="flex justify-center">
            <img
                src={src}
                loading="lazy"
                alt={alt}
                className="logo-small blur-sm cursor-pointer"
            />
        </div>
    );
};

const IconsRow = () => {
    const iconData = [
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0184a8af3b95_Logo01.svg',
            alt: 'Logo 1',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d015ac1af3b99_Logo02.svg',
            alt: 'Logo 2',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0130d8af3b9a_Logo03.svg',
            alt: 'Logo 3',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d014108af3b96_Logo04.svg',
            alt: 'Logo 4',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d018ec3af3b94_Logo05.svg',
            alt: 'Logo 5',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d011934af3b97_Logo06.svg',
            alt: 'Logo 6',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d01504daf3b93_Logo07.svg',
            alt: 'Logo 7',
        },
        {
            src: 'https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0157c2af3b98_Logo08.svg',
            alt: 'Logo 8',
        },
    ];

    return (
        <div className="grid grid-cols-4 gap-8 md:gap-0 lg:grid-cols-8 mt-[100px]">
            {iconData.map((icon, index) => (
                <CenteredIcon key={index} src={icon.src} alt={icon.alt} />
            ))}
        </div>
    );
};

export default IconsRow;
