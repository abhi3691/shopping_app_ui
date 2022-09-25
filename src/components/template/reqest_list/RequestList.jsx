import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import RequestData from './RequstData';
import styles from './RequestListStyle';
import SingleRequest from '../../organization/single_reqest/SingleRequest';
const  RequestList=()=>  {
  
  //ref
  const dataList = React.useRef([]);

  //state
  const [extendedState,setextendedState] =React.useState({})
  const [dataProvider,setDataProvider] = React.useState(new DataProvider((r1, r2) => {
    return r1!== r2;
  }))

  //layout declare
  const layoutProvider = new LayoutProvider(
    i => {
      return dataProvider.getDataForIndex(i).type;
    },
    (type, dim) => {
      (dim.width = ScreenRatio.width), (dim.height = ScreenRatio.height/6);
    },
  );
  //page rendering
  React.useEffect(() => {
      loadData();

  }, []);


  //loadData Function

const  loadData = () => {
  dataList.current =[];
    data = RequestData;
    if (data.length !== 0) {
     
      for (let i = 0; i < data.length; i++) {
        dataList.current.push({
          type: 'NORMAL',
          item: {
            productName: data[i].productName,
            DateOfPurchase: data[i].DateOfPurchase,
            productImage: data[i].productImage,
            requestStatus: false,
          },
        });
        if (i == data.length - 1) {
          setDataProvider(new DataProvider((r1, r2) => {
            return r1 != r2;
          }).cloneWithRows(dataList.current))
        }
      }
    }
  };

  //request change function

 const changeStatus = index => {
    dataList.current[index].item.requestStatus =
      !dataList.current[index].item.requestStatus;
    setextendedState(
       dataList.current[index].item.requestStatus,
    )
  };

  //row render single item
  const rowRenderer = (type, data, index, extendedState) => {
    const {productName, DateOfPurchase, productImage, requestStatus} =
      data.item;
    return (
      <SingleRequest
        productName={productName}
        DateOfPurchase={DateOfPurchase}
        productImage={productImage}
        requestStatus={requestStatus}
        changeStatus={() => changeStatus(index)}
      />
    );
  };

  //footer
  const renderFooter = () => {
    return <View style={styles.footer} />;
  };

  // Recycler list View

    return (
      <View style={styles.container}>
        {dataList.length !== 0}
        {
          <RecyclerListView
            dataProvider={dataProvider}
            layoutProvider={layoutProvider}
            rowRenderer={rowRenderer}
            renderFooter={renderFooter}
            showsVerticalScrollIndicator={false}
            forceNonDeterministicRendering={false}
            extendedState={{state: extendedState}}
          />
        }
      </View>
    );
}

export default RequestList;
