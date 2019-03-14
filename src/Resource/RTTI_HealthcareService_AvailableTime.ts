
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

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


        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
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
        });
        

        export var RTTI_HealthcareService_AvailableTime:any = t.intersection([mandatory, partial]);
        

export type IHealthcareService_AvailableTime = t.TypeOf<typeof RTTI_HealthcareService_AvailableTime>;
        
        