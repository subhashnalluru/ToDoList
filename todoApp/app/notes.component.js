System.register(["angular2/core", "./textBox.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, textBox_component_1;
    var NotesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (textBox_component_1_1) {
                textBox_component_1 = textBox_component_1_1;
            }],
        execute: function() {
            NotesComponent = (function () {
                function NotesComponent(textBox) {
                    this.index = textBox.index;
                    this.notesArray = textBox.notesArray;
                    this.newNote = textBox.newNote;
                }
                NotesComponent.prototype.addToNotes = function () {
                    this.notesArray.push(this.newNote);
                    this.newNote = "";
                    this.index++;
                    document.querySelector('textArea').innerHTML = "";
                };
                NotesComponent.prototype.deleteNote = function (i) {
                    this.notesArray.splice(i, 1);
                };
                NotesComponent = __decorate([
                    core_1.Component({
                        selector: 'notes',
                        template: "<table style=\"text-align: left;\">\n                    <tr>\n                        <th style=\"width: 25ch\"></th>\n                        <th style=\"width: 20ch\"></th>\n                    </tr>\n                    <tr *ngFor=\"#note of notesArray; #i= index\">\n                        <td>{{note}}</td>\n                        <td style=\"text-align: center\"><button (click)=\"deleteNote(i)\">Delete ?</button></td>\n                    </tr>\n                </table>",
                        providers: [textBox_component_1.TextBoxComponent]
                    }), 
                    __metadata('design:paramtypes', [textBox_component_1.TextBoxComponent])
                ], NotesComponent);
                return NotesComponent;
            }());
            exports_1("NotesComponent", NotesComponent);
        }
    }
});
//# sourceMappingURL=notes.component.js.map