
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

import {RTTI_Period, IPeriod} from './RTTI_Period';

export enum HumanNameUseKind {
                usual = 'usual',
official = 'official',
temp = 'temp',
nickname = 'nickname',
anonymous = 'anonymous',
old = 'old',
maiden = 'maiden'
            }
const HumanNameUseKindKeys = t.keyof({
                [HumanNameUseKind.usual]: null,
[HumanNameUseKind.official]: null,
[HumanNameUseKind.temp]: null,
[HumanNameUseKind.nickname]: null,
[HumanNameUseKind.anonymous]: null,
[HumanNameUseKind.old]: null,
[HumanNameUseKind.maiden]: null
            });


            export interface IHumanName {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * Identifies the purpose for this name.
                     */
                    use? : HumanNameUseKind;
                    

                    /**
                     * Extensions for use
                     */
                    _use? : IElement;
                    

                    /**
                     * Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.
                     */
                    text? : string;
                    

                    /**
                     * Extensions for text
                     */
                    _text? : IElement;
                    

                    /**
                     * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.
                     */
                    family? : string;
                    

                    /**
                     * Extensions for family
                     */
                    _family? : IElement;
                    

                    /**
                     * Given name.
                     */
                    given? : string[];
                    

                    /**
                     * Extensions for given
                     */
                    _given? : IElement[];
                    

                    /**
                     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.
                     */
                    prefix? : string[];
                    

                    /**
                     * Extensions for prefix
                     */
                    _prefix? : IElement[];
                    

                    /**
                     * Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.
                     */
                    suffix? : string[];
                    

                    /**
                     * Extensions for suffix
                     */
                    _suffix? : IElement[];
                    

                    /**
                     * Indicates the period of time when this name was valid for the named person.
                     */
                    period? : IPeriod;
                    
            }
        


        export const RTTI_HumanName: t.Type<IHumanName> = t.recursion( 'IHumanName', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
use: HumanNameUseKindKeys,
_use: RTTI_Element,
text: t.string,
_text: RTTI_Element,
family: t.string,
_family: RTTI_Element,
given: t.array(t.string),
_given: t.array(RTTI_Element),
prefix: t.array(t.string),
_prefix: t.array(RTTI_Element),
suffix: t.array(t.string),
_suffix: t.array(RTTI_Element),
period: RTTI_Period
        })
        
        );
        

        