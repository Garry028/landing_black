import { motion } from 'framer-motion';
import React from 'react';

const DownloadBadge = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 mx-auto">
            <motion.a
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
                href="http://applestore.com" target="_blank" className="download-badge-button w-inline-block">
                <img
                    src="https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d013be4af3ba9_App%20Store%20badge.svg"
                    loading="lazy"
                    alt="Black+ Webflow Template by Wedoflow.com"
                    className="download-badge-image"
                />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.1 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
                href="http://googleplay.com" target="_blank" className="download-badge-button w-inline-block">
                <img
                    src="https://assets.website-files.com/643e8219320d012584af3b6d/643e8219320d011c39af3baa_Mobile%20App%20Store%20Badge.svg"
                    loading="lazy"
                    alt="Black+ Webflow Template by Wedoflow.com"
                    className="download-badge-image"
                />
            </motion.a>
        </div>
    );
};

export default DownloadBadge;
