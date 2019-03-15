
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum HealthcareService_AvailableTimeDaysOfWeekKind {
                mon = 'mon',
tue = 'tue',
wed = 'wed',
thu = 'thu',
fri = 'fri',
sat = 'sat',
sun = 'sun'
            }
const HealthcareService_AvailableTimeDaysOfWeekKindKeys = t.keyof({
                [HealthcareService_AvailableTimeDaysOfWeekKind.mon]: null,
[HealthcareService_AvailableTimeDaysOfWeekKind.tue]: null,
[HealthcareService_AvailableTimeDaysOfWeekKind.wed]: null,
[HealthcareService_AvailableTimeDaysOfWeekKind.thu]: null,
[HealthcareService_AvailableTimeDaysOfWeekKind.fri]: null,
[HealthcareService_AvailableTimeDaysOfWeekKind.sat]: null,
[HealthcareService_AvailableTimeDaysOfWeekKind.sun]: null
            });


            export interface IHealthcareService_AvailableTime {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Indicates which days of the week are available between the start and end Times.
                     */
                    daysOfWeek? : HealthcareService_AvailableTimeDaysOfWeekKind[];
                    

                    /**
                     * Extensions for daysOfWeek
                     */
                    _daysOfWeek? : IElement[];
                    

                    /**
                     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
                     */
                    allDay? : boolean;
                    

                    /**
                     * Extensions for allDay
                     */
                    _allDay? : IElement;
                    

                    /**
                     * The opening time of day. Note: If the AllDay flag is set, then this time is ignored.
                     */
                    availableStartTime? : string;
                    

                    /**
                     * Extensions for availableStartTime
                     */
                    _availableStartTime? : IElement;
                    

                    /**
                     * The closing time of day. Note: If the AllDay flag is set, then this time is ignored.
                     */
                    availableEndTime? : string;
                    

                    /**
                     * Extensions for availableEndTime
                     */
                    _availableEndTime? : IElement;
                    
            }
        


        export const RTTI_HealthcareService_AvailableTime: t.Type<IHealthcareService_AvailableTime> = t.recursion( 'IHealthcareService_AvailableTime', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
daysOfWeek: t.array(HealthcareService_AvailableTimeDaysOfWeekKindKeys),
_daysOfWeek: t.array(RTTI_Element),
allDay: t.boolean,
_allDay: RTTI_Element,
availableStartTime: t.string,
_availableStartTime: RTTI_Element,
availableEndTime: t.string,
_availableEndTime: RTTI_Element
        })
        
        );
        

        