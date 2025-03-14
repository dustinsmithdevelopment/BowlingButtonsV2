import {Component} from "horizon/core";
import {Pressable, Text, UIComponent, UINode, View} from "horizon/ui";

const BACKGROUND_COLOR = "#ffffff";


class BowlingButtons extends UIComponent<typeof BowlingButtons> {
  panelHeight = 300;
  panelWidth = 400;
    private buttonStyling = {width: 100, height: 100, borderRadius: 20, margin: 4};
  static propsDefinition = {};
  initializeUI(): UINode {
    return View({
      children: [
          View({children: [
              Pressable({children: [
                  Text({text: "Start",
                      style: {color: "white", height: '100%', textAlignVertical: 'center', textAlign: 'center'}})]
                  , style: {backgroundColor: "green", ...this.buttonStyling}}),
            ]}),
          View({children: [
              Pressable({children: [
                  Text({text: "Reset",
                      style: {color: "white", height: '100%', textAlignVertical: 'center', textAlign: 'center'}})],
                  style: {backgroundColor: "red", ...this.buttonStyling}}),
              Pressable({children: [
                  Text({text: "Ball Glitched",
                      style: {color: "black", height: '100%', textAlignVertical: 'center', textAlign: 'center'}})],
                  style: {backgroundColor: "yellow", ...this.buttonStyling}})],
              style:{display:"flex",flexDirection:"column",justifyContent:"center"}}),
          View({children: [
              Pressable({children: [
                  Text({text: "Join",
                      style: {color: "white", height: '100%', textAlignVertical: 'center', textAlign: 'center'}})],
                  style: {backgroundColor: "blue", ...this.buttonStyling}}),
              Pressable({children: [
                  Text({text: "Skip Turn",
                      style: {height: '100%', textAlignVertical: 'center', textAlign: 'center'}})],
                  style: {backgroundColor: "purple", ...this.buttonStyling}})],
              style:{display:"flex",flexDirection:"column",justifyContent:"center"}})
      ], style: {backgroundColor: BACKGROUND_COLOR, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}
    })
  }

  start() {
    
  }
}
Component.register(BowlingButtons);