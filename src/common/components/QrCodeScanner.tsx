import { Html5QrcodeScanner } from "html5-qrcode";
import { QrcodeErrorCallback, QrcodeSuccessCallback } from "html5-qrcode/esm/core";
import { Html5QrcodeCameraScanConfig } from "html5-qrcode/esm/html5-qrcode";
import React, { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

/* class Html5QrcodePlugin extends React.Component<any,any> {
    html5QrcodeScanner:any;
    props:any
    render() {
        return <div id={qrcodeRegionId} />;
    }

    componentWillUnmount() {
        // TODO(mebjas): See if there is a better way to handle
        //  promise in `componentWillUnmount`.
        this.html5QrcodeScanner.clear().catch((error:any) => {
            console.error("Failed to clear html5QrcodeScanner. ", error);
        });
    }

    componentDidMount() {
        // Creates the configuration object for Html5QrcodeScanner.
        function createConfig(props:any) {
            var config:any = {};
            if (props.fps) {
            config.fps = props.fps;
            }
            if (props.qrbox) {
            config.qrbox = props.qrbox;
            }
            if (props.aspectRatio) {
            config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
            config.disableFlip = props.disableFlip;
            }
            return config;
        }

        var config = createConfig(this.props);
        var verbose = this.props.verbose === true;

        // Suceess callback is required.
        if (!(this.props.qrCodeSuccessCallback )) {
            throw "qrCodeSuccessCallback is required callback.";
        }

        this.html5QrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, config, verbose);
        this.html5QrcodeScanner.render(
            this.props.qrCodeSuccessCallback,
            this.props.qrCodeErrorCallback);
    }
};

export default Html5QrcodePlugin;
 */

interface IQrCodeScanner {
    config: any,
    successCallback: QrcodeSuccessCallback,
    errorCallback?: QrcodeErrorCallback
}


const QrCodeScanner = (props: IQrCodeScanner) => {
    let html5QrcodeScanner: Html5QrcodeScanner;
    
    
    useEffect(() => {
        if (!(props.successCallback )) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, props.config, true);
        html5QrcodeScanner.render(props.successCallback, props.errorCallback);
        html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, props.config, true)

        return () => {
            html5QrcodeScanner.clear().catch((error:any) => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        }
        }, []);
        
        
        return <div id={qrcodeRegionId} />;
}
        
        
export default QrCodeScanner;