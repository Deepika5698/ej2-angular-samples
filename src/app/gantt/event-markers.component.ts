import { Component, OnInit } from '@angular/core';
import { projectNewData } from './data';
@Component({
    selector: 'ej2-gantteventmarker',
    templateUrl: 'event-markers.html'
})
export class GanttEventMarkersComponent implements OnInit {
    public data: object[];
    public taskSettings: object;
    public columns: object[];
    public labelSettings: object;
    public projectStartDate: Date;
    public projectEndDate: Date;
    public eventMarkers: object[];
    public ngOnInit(): void {
        this.data = projectNewData;
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        };
        this.columns = [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', width: 250 },
            { field: 'StartDate' },
            { field: 'EndDate' },
            { field: 'Duration' },
            { field: 'Predecessor' },
            { field: 'Progress' },
        ];
        this.projectStartDate = new Date('03/24/2019');
        this.projectEndDate = new Date('07/06/2019');
        this.labelSettings = {
            leftLabel: 'TaskName',
        };
        this.eventMarkers = [
            {
                day: new Date('04/02/2019'),
            }, {
                day: new Date("04/09/2019"),
                label: 'Research phase'
            }, {
                day: new Date("04/30/2019"),
                label: 'Design phase'
            }, {
                day: new Date("05/23/2019"),
                label: 'Production phase'
            }, {
                day: new Date("06/20/2019"),
                label: 'Sales and marketing phase'
            }
        ];
    }
}
