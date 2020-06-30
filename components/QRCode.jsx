import React from 'react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

const QRC = ({ value }) => (
  <QRCode
    value={value}
    size={200}
    bgColor="transparent"
    fgColor="#000000"
    level="L"
    includeMargin={false}
    renderAs="svg"
  />
);

QRC.propTypes = {
  value: PropTypes.string,
};

QRC.defaultProps = {
  value: PropTypes.objectOf(PropTypes.string),
};

export default QRC;
