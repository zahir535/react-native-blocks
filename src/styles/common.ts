import { Dimensions, ViewStyle } from "react-native";

export const alignFlexStart: ViewStyle = { alignItems: "flex-start" };
export const alignItemsCenter: ViewStyle = { alignItems: "center" };
export const alignItemsEnd: ViewStyle = { alignItems: "flex-end" };
export const alignItemsStart: ViewStyle = { alignItems: "flex-start" };
export const alignSelfStart: ViewStyle = { alignSelf: "flex-start" };
export const alignSelfCenter: ViewStyle = { alignSelf: "center" };
export const alignSelfEnd: ViewStyle = { alignSelf: "flex-end" };
export const centerHorizontal: ViewStyle = { justifyContent: "center" };
export const centerVertical: ViewStyle = { alignItems: "center" };
export const centerHV: ViewStyle = { ...centerHorizontal, ...centerVertical };
export const justifyContentEnd: ViewStyle = { justifyContent: "flex-end" };
export const justifyContentStart: ViewStyle = { justifyContent: "flex-start" };
export const spaceBetweenHorizontal: ViewStyle = { justifyContent: "space-between" };
export const spaceBetweenVertical: ViewStyle = { alignContent: "space-between" };
export const spaceBetweenHV: ViewStyle = { ...spaceBetweenHorizontal, ...spaceBetweenVertical };
export const spaceAroundHorizontal: ViewStyle = { justifyContent: "space-around" };
export const spaceAroundVertical: ViewStyle = { alignContent: "space-around" };
export const spaceAroundHV: ViewStyle = { ...spaceAroundHorizontal, ...spaceAroundVertical };

export const flexChild: ViewStyle = { flex: 1 };
export const flexGrow: ViewStyle = { flexGrow: 1 };
export const flexNone: ViewStyle = { flex: 0 };
export const flexShrink: ViewStyle = { flexShrink: 1 };

export const absolutePosition: ViewStyle = { position: "absolute" };

export const flexContainer: ViewStyle = { display: "flex" };
export const flexCol: ViewStyle = { ...flexContainer, flexDirection: "column" };
export const flexRow: ViewStyle = { ...flexContainer, flexDirection: "row" };
export const flexRowReverse: ViewStyle = { ...flexContainer, flexDirection: "row-reverse" };
export const flexColCC: ViewStyle = { ...flexCol, ...centerHV };
export const flexRowCC: ViewStyle = { ...flexRow, ...centerHV };
export const flexColSbSb: ViewStyle = { ...flexCol, ...spaceBetweenHV };
export const flexRowSbSb: ViewStyle = { ...flexRow, ...spaceBetweenHV };
export const flexColSaSa: ViewStyle = { ...flexCol, ...spaceAroundHV };
export const flexRowSaSa: ViewStyle = { ...flexRow, ...spaceAroundHV };
export const flexWrap: ViewStyle = { flexWrap: "wrap" };
export const fullHeight: ViewStyle = { height: "100%" };
export const fullWidth: ViewStyle = { width: "100%" };
export const halfWidth: ViewStyle = { width: "50%" };
export const fullHW: ViewStyle = { ...fullHeight, ...fullWidth };
export const autoWidth: ViewStyle = { width: "auto" };
export const autoHeight: ViewStyle = { height: "auto" };
export const borderBottomBlack: ViewStyle = { borderBottomWidth: 1, borderBottomColor: "black" };
export const noBorderBottom: ViewStyle = { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 };
export const borderDashed: ViewStyle = { borderStyle: "dashed" };
export const noBorder: ViewStyle = { borderWidth: 0 };
export const noMargin: ViewStyle = { margin: 0 };
export const noPadding: ViewStyle = { padding: 0 };
export const overflowHidden: ViewStyle = { overflow: "hidden" };
export const zIndexTop: ViewStyle = { zIndex: 1 };
export const noHorizontalPadding: ViewStyle = { paddingLeft: 0, paddingRight: 0 };
export const rowCenterVertical: ViewStyle = { ...centerVertical, ...flexRow };
export const absoluteFill: ViewStyle = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };
export const displayNone: ViewStyle = { display: "none" };

export const border = (color: string, width: number, radius?: number, style?: "solid" | "dotted" | "dashed") => ({
  borderColor: color,
  borderRadius: radius,
  borderStyle: style !== undefined ? style : "solid",
  borderWidth: width,
});

export const circle = (height: number, backgroundColor?: string) => ({
  height: height,
  width: height,
  borderRadius: height / 2,
  backgroundColor: backgroundColor,
});

export const circleBorder = (height: number, borderWidth: number, borderColor: string, backgroundColor?: string) => ({
  ...circle(height, backgroundColor),
  borderWidth: borderWidth,
  borderColor: borderColor,
});

export const customShadow = (color: string, offsetY: number, offsetX: number, opacity: number, radius: number) => ({
  shadowColor: color,
  shadowOffset: {
    height: offsetY,
    width: offsetX,
  },
  shadowOpacity: opacity,
  shadowRadius: radius,
});

export const disabledOpacity4: ViewStyle = { opacity: 0.4 };
export const disabledOpacity5: ViewStyle = { opacity: 0.5 };
export const disabledOpacity6: ViewStyle = { opacity: 0.6 };

export const px = (points: number) => ({
  paddingLeft: points,
  paddingRight: points,
});

export const py = (points: number) => ({
  paddingTop: points,
  paddingBottom: points,
});

export const shadow50Black = {
  // shadow for android
  // elevation: 5,
  // shadow for ios
  shadowColor: "black",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.15,
  shadowRadius: 5,
};

export interface DeviceSizeType {
  WIDTH: number;
  HEIGHT: number;
}

export const DEVICE: {
  WINDOW: DeviceSizeType;
  SCREEN: DeviceSizeType;
} = {
  WINDOW: {
    WIDTH: Dimensions.get("window").width,
    HEIGHT: Dimensions.get("window").height,
  },
  SCREEN: {
    WIDTH: Dimensions.get("screen").width,
    HEIGHT: Dimensions.get("screen").height,
  },
};
