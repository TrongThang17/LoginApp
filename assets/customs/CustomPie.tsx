import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../Colors';
import Pie from 'react-native-pie';
interface props {
  title?: string;
  percentage?: any;
  color_pieChart?: string;
  text_percent_pieChart?: string;
  text_under_percent?: any;
  text_up1?: any;
  text_down1?: any;
  color_textUp1?: string;
  text_up2?: any;
  text_down2?: any;
  color_textUp2?: string;
  text_up3?: any;
  text_down3?: any;
  color_textUp3?: string;
  text_up4?: any;
  text_down4?: any;
  color_textUp4?: string;
}

const CustomPie: FC<props> = props => {
  return (
    <View style={styles.viewPieChart1}>
      <Text style={styles.titlePieChart1}>{props.title}</Text>
      <View style={styles.pieChart1}>
        <Pie
          radius={80}
          innerRadius={52}
          sections={[
            {
              percentage: props.percentage,
              color: props.color_pieChart,
            },
          ]}
          backgroundColor={Colors.color_bg_pie}
        />
        <View style={styles.viewTextPieChart1}>
          <Text style={styles.textPieChart1}>
            {props.text_percent_pieChart}
          </Text>
          <Text style={styles.textUnder}>{props.text_under_percent}</Text>
        </View>
      </View>
      <View style={styles.viewFooter}>
        <View
          style={[styles.view1, {flex: props.title != 'Công suất' ? 1 : 0}]}>
          <Text style={[styles.textUp, {color: props.color_textUp1}]}>
            {props.text_up1}
          </Text>
          <Text style={styles.textDown}>{props.text_down1}</Text>
        </View>
        <View
          style={[styles.view1, {flex: props.title != 'Công suất' ? 1 : 0}]}>
          <Text style={[styles.textUp, {color: props.color_textUp2}]}>
            {props.text_up2}
          </Text>
          <Text style={styles.textDown}>{props.text_down2}</Text>
        </View>
        <View
          style={[styles.view1, {flex: props.title != 'Công suất' ? 1 : 0}]}>
          <Text style={[styles.textUp, {color: props.color_textUp3}]}>
            {props.text_up3}
          </Text>
          <Text style={styles.textDown}>{props.text_down3}</Text>
        </View>
        <View
          style={[styles.view1, {flex: props.title != 'Công suất' ? 1 : 0}]}>
          <Text style={[styles.textUp, {color: props.color_textUp4}]}>
            {props.text_up4}
          </Text>
          <Text style={styles.textDown}>{props.text_down4}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPieChart1: {
    width: 328,
    height: 277,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
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
    width: 100,
  },
  viewTextPieChart1: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPieChart1: {
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
  viewFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textUp: {
    textAlign: 'center',
    alignItems: 'flex-start',
    fontSize: 14,
    fontWeight: '700',
  },
  textDown: {
    textAlign: 'center',
    alignItems: 'flex-end',
    fontSize: 12,
    fontWeight: '400',
    color: Colors.color_text_pieChart1,
  },
});

export default CustomPie;
