import React from 'react';

const logoData = [
    "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0184a8af3b95_Logo01.svg",
    "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d015ac1af3b99_Logo02.svg",
    " https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0130d8af3b9a_Logo03.svg"
    , "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d014108af3b96_Logo04.svg",
    "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d018ec3af3b94_Logo05.svg",
    "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d011934af3b97_Logo06.svg",
    "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d01504daf3b93_Logo07.svg",
    "https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d0157c2af3b98_Logo08.svg"


];

const LogoGrid = () => {
    return (
        <div className="">
            {logoData.map((logo, index) => (
                <div key={index} className="">
                    <img
                        src={logo}
                        loading="lazy"
                        alt={`Logo ${index + 1}`}
                        className="logo-small"
                    />
                </div>
            ))}
        </div>
    );
};

export default LogoGrid;
