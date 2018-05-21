import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textToColor'
})
export class TextToColorPipe implements PipeTransform {

  defaultColor = '#FF3D00';
  colors = {
    'a': '#E3F2FD',
    'b': '#BBDEFB',
    'c': '#90CAF9',
    'd': '#64B5F6',
    'e': '#42A5F5',
    'f': '#2196F3',
    'g': '#1E88E5',
    'h': '#1976D2',
    'i': '#1565C0',
    'j': '#0D47A1',
    'k': '#82B1FF',
    'm': '#448AFF',
    'n': '#2979FF',
    'o': '#2962FF',
    'p': '#EDE7F6',
    'q': '#D1C4E9',
    'r': '#B39DDB',
    's': '#9575CD',
    't': '#7E57C2',
    'u': '#673AB7',
    'v': '#5E35B1',
    'w': '#512DA8',
    'x': '#4527A0',
    'z': '#311B92',
    'y': '#B388FF',
  };

  transform(value: any, args?: any): any {
    if (value == null || value === ' ') {
      return this.defaultColor;
    }
    const firstChar = value.charAt(0).toLowerCase();
    return this.colors[firstChar];
  }

}
