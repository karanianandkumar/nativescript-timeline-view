import { Observable } from 'tns-core-modules/data/observable';
import { TimelineView } from 'nativescript-timeline-view';

export class HelloWorldModel extends Observable {
  public message: string;
  private timelineView: TimelineView;

  constructor() {
    super();

    this.timelineView = new TimelineView();
    this.message = this.timelineView.message;
  }
}
