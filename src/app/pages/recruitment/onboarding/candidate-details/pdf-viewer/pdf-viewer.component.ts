import { Component } from '@angular/core';

import {
    LinkAnnotationService,
    BookmarkViewService,
    MagnificationService,
    ThumbnailViewService,
    ToolbarService,
    NavigationService,
    AnnotationService,
    TextSearchService,
    TextSelectionService,
} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
    selector: 'app-pdf-viewer',
    templateUrl: './pdf-viewer.component.html',
    styleUrls: ['./pdf-viewer.component.scss'],
    providers: [
        LinkAnnotationService,
        BookmarkViewService,
        MagnificationService,
        ThumbnailViewService,
        ToolbarService,
        NavigationService,
        AnnotationService,
        TextSearchService,
        TextSelectionService,
    ],
})
export class PdfViewerComponent {
    public service =
        'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';

    public document = 'PDF_Succinctly.pdf';
}
