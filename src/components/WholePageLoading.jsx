import React, { Component } from 'react';

const WholePageLoading =({responseInfo})=> {
    
        return (
          <div className="page-loading-modal-wrapper">
            <div className="page-loading-overlay"></div>
            <div className="page-loading-modal">
                {responseInfo.displayRes?
                <div className="page-loading-response-info">{responseInfo.responseContent}</div>
                :
                <div className="page-loading-loader"></div>
                }
            </div>
          </div>
        );
    
}

export default WholePageLoading;