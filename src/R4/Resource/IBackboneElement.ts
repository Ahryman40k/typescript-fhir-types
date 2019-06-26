import { IElement } from "./RTTI_Element";
import { IExtension } from "./RTTI_Extension";

export interface IBackboneElement extends IElement {
    modifierExtension?: IExtension[];
}