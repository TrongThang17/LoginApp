import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images/image';
import {PieChart} from 'react-native-chart-kit';
import CustomPie from '../../../assets/customs/CustomPie';
const SeeMore = () => {
  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <View style={styles.viewSearch}>
          <Image source={image.find} style={styles.iconSearch} />
          <TextInput
            style={styles.textInput}
            placeholder="Tìm kiếm"
            placeholderTextColor={Colors.color_placeholder_search}
          />
          <TouchableOpacity>
            <Image source={image.filter} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.touchNoti}>
            <Image source={image.noti} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.pieCharContainer}>
          {/* <View
            style={{
              width: 171,
              height: 171,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.6}
              coverFill={'#FFF'}
              style={styles.pieChart1}
            />
            <View style={styles.viewTextPieChart1}>
              <Text>AAA</Text>
            </View>
          </View> */}
          {/* <View>
            <PieChart
              data={data}
              width={171}
              height={171}
              accessor={'population'}
              backgroundColor={'transparent'}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              paddingLeft={'25'}
              // center={[10, 50]}
              hasLegend={false}
            />
          </View> */}

          <CustomPie
            title="Đèn"
            color_pieChart={Colors.color_circle_pieChart1}
            percentage={56}
            text_percent_pieChart={'56%'}
            text_under_percent={'Số đèn sáng (20/28)'}
            text_up1={'1250'}
            text_down1={'Tổng đèn'}
            color_textUp1={Colors.color_text_lamp1}
            text_up2={'28/1250'}
            text_down2={'Tổng TBĐK'}
            color_textUp2={Colors.color_text_lamp2}
            text_up3={'3/28'}
            text_down3={'Mất kết nối'}
            color_textUp3={Colors.color_text_lamp3}
            text_up4={'2/28'}
            text_down4={'Hư hỏng'}
            color_textUp4={Colors.color_text_lamp4}
          />
          <CustomPie
            title="Tủ điện"
            color_pieChart={Colors.color_circle_pieChart2}
            percentage={56}
            text_percent_pieChart={'56%'}
            text_under_percent={'Số tủ bật (2/5)'}
            text_up1={'1250'}
            text_down1={'Tổng tủ'}
            color_textUp1={Colors.color_text_cabinet1}
            text_up2={'28/1250'}
            text_down2={'Tổng TBĐK'}
            color_textUp2={Colors.color_text_cabinet2}
            text_up3={'3/28'}
            text_down3={'Mất kết nối'}
            color_textUp3={Colors.color_text_cabinet3}
            text_up4={'2/28'}
            text_down4={'Hư hỏng'}
            color_textUp4={Colors.color_text_cabinet4}
          />
          <CustomPie
            title="Công suất"
            color_pieChart={Colors.color_circle_pieChart3}
            percentage={46}
            text_percent_pieChart={'46%'}
            text_under_percent={'Số đèn sáng (20/28)'}
            text_up1={'232/504'}
            text_down1={'Tổng công suất đang hoạt động (kW)'}
            color_textUp1={Colors.color_text_wattage}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    backgroundColor: 'white',
  },
  viewSearch: {
    flexDirection: 'row',
    height: 40,
    width: 278,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.color_border_search,
    alignItems: 'center',
    marginRight: 10,
  },
  iconSearch: {
    marginLeft: 18,
    marginRight: 15,
  },
  textInput: {
    width: 174,
    height: 40,
    fontSize: 14,
    fontWeight: '400',
    marginRight: 15,
    color: Colors.color_placeholder_search,
  },
  touchNoti: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.color_border_search,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  pieCharContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  viewPieChart1: {
    width: 328,
    height: 277,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  viewTitle: {},
  pieChart1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlePieChart1: {
    color: Colors.color_title_pieChart,
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 16,
    marginTop: 16,
    width: 40,
  },
  viewTextPieChart1: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPieChart1: {
    backgroundColor: 'transparent',
    color: Colors.color_title_pieChart,
    fontSize: 20,
    fontWeight: '700',
  },
  textUnder: {
    width: 67,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.color_text_pieChart1,
  },
  describe: {},
});

export default SeeMore;
