import { Component, OnInit, ViewChild, Inject, ViewEncapsulation } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
import { sampleData } from './jsontreegriddata';
import { TreeGridComponent, PageService, FilterService, SortService, EditService} from '@syncfusion/ej2-angular-treegrid';


@Component({
    selector: 'ej2-treegrid-container',
    templateUrl: 'adaptive.html',
    styleUrls: ['adaptive.style.css'],
    providers: [ PageService, FilterService, SortService, EditService ]

})
export class TreeGridAdaptiveComponent implements OnInit {
    constructor(@Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['adaptive.style.css'];
    }

    @ViewChild('adaptive')
    public treegrid: TreeGridComponent;
    public data: Object[] = [];
    public editSettings: Object;
    public toolbar: string[];
    public isDeskTop: Boolean;
    public filterSettings: Object;
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
        this.filterSettings = { type: 'Excel' };
        this.isDeskTop = !Browser.isDevice;
    }
    public onLoad(): void {
        this.treegrid.grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
    }
}