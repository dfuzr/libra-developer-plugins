import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

import classnames from 'classnames';
import styles from './styles.module.css';

const getBackgroundImages = (imageDark, imageDarkHover, imageLight, imageLightHover) => {
  if (!imageLight) {
    return {
      backgroundImage: '',
      hoverBackgroundImage: '',
    };
  }

  const {isDarkTheme} = useThemeContext();

  const backgroundImage = isDarkTheme && imageDark ? imageDark : imageLight;

  let hoverBackgroundImage = isDarkTheme && imageDarkHover ? imageDarkHover : imageLightHover;
  hoverBackgroundImage = hoverBackgroundImage ? hoverBackgroundImage : backgroundImage;

  return {
    backgroundImage: useBaseUrl(backgroundImage),
    hoverBackgroundImage: useBaseUrl(hoverBackgroundImage),
  };
};

const WithBackgroundImage = ({
  children,
  className,
  imageDark,
  imageDarkHover,
  imageLight,
  imageLightHover,
  tag: Tag,
  ...props
}) => {
  const {backgroundImage, hoverBackgroundImage} =
    getBackgroundImages(imageDark, imageDarkHover, imageLight, imageLightHover);
  const backgroundImageStyle = {
    '--background-image': `url('${backgroundImage}')`,
    '--hover-background-image': `url('${hoverBackgroundImage}')`
  };
  const images = [imageDark, imageDarkHover, imageLight, imageLightHover]
    .filter(url => url)
    .map(url => useBaseUrl(url));

  useEffect(() => {
    images.forEach(url => {
      const image = new Image();
      image.src = url;
    });
  }, []);

  return (
    <Tag
      className={classnames(styles.root, className)}
      style={backgroundImageStyle}
      {...props}
    >
      {children}
    </Tag>
  );
};

WithBackgroundImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  imageDark: PropTypes.string,
  imageDarkHover: PropTypes.string,
  imageLight: PropTypes.string,
  imageLightHover: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

WithBackgroundImage.defaultProps = {
  tag: 'div',
};

export default WithBackgroundImage;
