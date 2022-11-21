import {Text, View} from 'react-native';
import React, {Component, FC} from 'react';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';
import styles from './ProductListStyle';
import ProductListSwipe from '../../organization/product_list_siwp/ProductListSwipe';
import ProductKeyFeatures from '../../organization/product_key_features/ProductKeyFeatures';
import ProductCustomerReview from '../../organization/product_customer_review/ProductCustomerReview';
import {Data, RecycleData} from './Props';
const ProductList: FC<Data> = ({item}) => {
  //ref
  const dataList = React.useRef<RecycleData[]>([]);

  //state
  const [extendedState, setextendedState] = React.useState({});
  const [dataProvider, setDataProvider] = React.useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2;
    }),
  );

  //ref declare
  const layoutProvider = new LayoutProvider(
    i => {
      return dataProvider.getDataForIndex(i).type;
    },
    (type, dim) => {
      (dim.width = ScreenRatio.width), (dim.height = ScreenRatio.height);
    },
  );

  //page rendering
  React.useEffect(() => {
    loadData();
  }, []);

  //loadData Function
  const loadData = () => {
    dataList.current = [];
    dataList.current.push({
      type: 'NORMAL',
      item: {
        productName: item.productName,
        DateOfPurchase: item.DateOfPurchase,
        productImage: item.productImage,
      },
    });

    setDataProvider(
      new DataProvider((r1, r2) => {
        return r1 != r2;
      }).cloneWithRows(dataList.current),
    );
  };

  //request change function

  //row render single item
  const rowRenderer = (
    type: any,
    data: RecycleData,
    index: any,
    extendedState: any,
  ) => {
    return (
      <View style={{flexGrow: 1}}>
        <ProductListSwipe item={data.item} />
        <ProductKeyFeatures />
        <ProductCustomerReview />
      </View>
    );
  };

  //footer
  const renderFooter = () => {
    return <View style={styles.footer} />;
  };

  // Recycler list View
  return (
    <View style={styles.container}>
      {dataList.current.length !== 0 && (
        <RecyclerListView
          dataProvider={dataProvider}
          layoutProvider={layoutProvider}
          rowRenderer={rowRenderer}
          renderFooter={renderFooter}
          showsVerticalScrollIndicator={false}
          forceNonDeterministicRendering={false}
          extendedState={{state: extendedState}}
        />
      )}
    </View>
  );
};

export default ProductList;
