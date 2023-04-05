import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Colors} from '../../../assets/Colors';
import SignatureScreen from 'react-native-signature-canvas';
import {image} from '../../../assets/images/image';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const Signature = () => {
  const [count, setCount]: any = useState(0);
  const [base64Img, setBase64Img]: any = useState(null);
  const [filePath, setFilePath]: any = useState();
  const ref = useRef();

  const handleOK = (signature: any) => {
    console.log(signature);
    setBase64Img(signature);
    setCount(0);
  };

  const handleUndo = () => {
    ref.current.undo();
    setFilePath(null);
    setCount(count - 1);
  };

  const onBegin = () => {
    setCount(count + 1);
    setFilePath({});
  };

  const handleConfirm = () => {
    console.log('end');
    ref.current.readSignature();
    // setBase64Img(Signature);
    console.log('state', base64Img);
    base64Img == null ? setBase64Img(filePath) : console.log('khum ngu');
  };

  //   const requestCameraPermission = async () => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.CAMERA,
  //           {
  //             title: 'Camera Permission',
  //             message: 'App needs camera permission',
  //           },
  //         );
  //         // If CAMERA Permission is granted
  //         return granted === PermissionsAndroid.RESULTS.GRANTED;
  //       } catch (err) {
  //         console.warn(err);
  //         return false;
  //       }
  //     } else {
  //       return true;
  //     }
  //   };

  //   const requestExternalWritePermission = async () => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //           {
  //             title: 'External Storage Write Permission',
  //             message: 'App needs write permission',
  //           },
  //         );
  //         // If WRITE_EXTERNAL_STORAGE Permission is granted
  //         return granted === PermissionsAndroid.RESULTS.GRANTED;
  //       } catch (err) {
  //         console.warn(err);
  //         Alert.alert('Write permission err', err);
  //       }
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   };

  //   const captureImage = async type => {
  //     let options = {
  //       mediaType: type,
  //       maxWidth: 300,
  //       maxHeight: 550,
  //       quality: 1,
  //       videoQuality: 'low',
  //       durationLimit: 30, //Video max duration in seconds
  //       saveToPhotos: true,
  //     };
  //     let isCameraPermitted = await requestCameraPermission();
  //     let isStoragePermitted = await requestExternalWritePermission();
  //     if (isCameraPermitted && isStoragePermitted) {
  //       launchCamera(options, response => {
  //         console.log('Response = ', response);

  //         if (response.didCancel) {
  //           Alert.alert('User cancelled camera picker');
  //           return;
  //         } else if (response.errorCode == 'camera_unavailable') {
  //           Alert.alert('Camera not available on device');
  //           return;
  //         } else if (response.errorCode == 'permission') {
  //           Alert.alert('Permission not satisfied');
  //           return;
  //         } else if (response.errorCode == 'others') {
  //           Alert.alert(response.errorMessage);
  //           return;
  //         }
  //         console.log('base64 -> ', response.base64);
  //         console.log('uri -> ', response.uri);
  //         console.log('width -> ', response.width);
  //         console.log('height -> ', response.height);
  //         console.log('fileSize -> ', response.fileSize);
  //         console.log('type -> ', response.type);
  //         console.log('fileName -> ', response.fileName);
  //         setFilePath(response);
  //       });
  //     }
  //   };

  const chooseFile = useCallback((type: any) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
    };
    launchImageLibrary(options, (response: any) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      setFilePath(response.assets[0].uri);
      setCount(1);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewSignature}>
        <SignatureScreen
          ref={ref}
          onOK={handleOK}
          onBegin={onBegin}
          //   onUndo={handleUndo}
          autoClear={true}
          descriptionText={'Write here'}
          backgroundColor={Colors.color_bg_auth}
          webStyle={`.m-signature-pad--footer {display: none;}
        .m-signature-pad {
        margin:auto; 
        border-radius:8px;
        width:328px;
        height:200px;
        box-shadow:none;
        border-color:${Colors.color_bg_signature}
        }`}
        />
        {count == 0 ? (
          <View style={styles.viewDraw}>
            <Image source={image.draw} />
            <Text style={styles.textDraw}>Tự tạo chữ ký</Text>
          </View>
        ) : (
          ''
        )}

        {filePath != '' ? (
          <Image source={{uri: filePath}} style={styles.fileUpLoad} />
        ) : (
          ''
        )}
      </View>
      <View style={styles.viewBody}>
        <Text style={styles.textOr}>hoặc</Text>
        <TouchableOpacity
          style={styles.viewChooseFile}
          onPress={() => chooseFile('photo')}>
          <Image source={image.chooseFile} />
          <Text style={styles.textUpLoadImg}>Tải ảnh lên</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewFooter}>
        <TouchableOpacity
          onPress={handleUndo}
          style={[
            styles.touchFooter,
            {
              marginRight: 16,
              backgroundColor:
                count == 0
                  ? Colors.color_btn_disabled
                  : Colors.color_btn_signature,
            },
          ]}
          disabled={count == 0 ? true : false}>
          <Text style={styles.textFooter}>Hoàn tác</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleConfirm}
          style={[
            styles.touchFooter,
            {
              marginRight: 16,
              backgroundColor:
                count == 0
                  ? Colors.color_btn_disabled
                  : Colors.color_btn_signature,
            },
          ]}
          disabled={count == 0 ? true : false}>
          <Text style={styles.textFooter}>Lưu</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{width: '100%'}}>
          <Image source={{uri: base64Img}} style={{width: 200, height: 100}} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.color_bg_auth,
    alignItems: 'center',
  },
  viewSignature: {
    width: 328,
    height: 200,
    borderColor: Colors.color_bg_signature,
    borderRadius: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBody: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewChooseFile: {
    flexDirection: 'row',
    marginTop: 22,
  },
  textOr: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.color_text1,
  },
  textUpLoadImg: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.color_text_uploadImg,
    marginLeft: 7,
  },
  viewFooter: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 69,
  },
  viewDraw: {
    flexDirection: 'row',
    zIndex: 1,
    position: 'absolute',
  },
  textDraw: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.color_text_draw,
    marginLeft: 7,
  },
  touchFooter: {
    height: 44,
    width: 156,

    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFooter: {
    color: Colors.color_text_login,
    fontSize: 14,
    fontWeight: '400',
  },
  fileUpLoad: {
    width: 296,
    height: 140,
    position: 'absolute',
    zIndex: 1,
  },
});
export default Signature;
