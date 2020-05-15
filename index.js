
// Notification Class
class Notification {
	constructor(title, msg, syncWithJs = false) {
		window.notificationCounter = window.notificationCounter || 1;
		this.data = { title, msg };
		this.id = this.getRendomNo();
		this.syncWithJs = syncWithJs;
		this.isVisible = false;
		if(this.syncWithJs) {
		app.notification.init(this.data.title, this.data.msg);
		app.notification.show(this.id);
		this.isVisible = true;
		}
	}

	// get next notification unique id
	getRendomNo() {
		return window.notificationCounter++;
	}

	// get current notifacation title
	get title () {
		return this.data.title;
	}

	// get current notifacation msg
	get msg () {
		return this.data.msg;
	}

	// set current notifacation title
	set title (value) {
		this.data.title = value;
		if(this.syncWithJs) {
			app.notification.init(this.data.title, this.data.msg);
		this.show();
		}
	}

	// set current notifacation msg
	set msg (value) {
		this.data.msg = value;
		if(this.syncWithJs) {
			app.notification.init(this.data.title, this.data.msg);
			this.show();
		}
	}

	// show notifiaction on screen
	show() {
		if(!this.isVisible) {
			this.isVisible = true;
			app.notification.init(this.data.title, this.data.msg);
			app.notification.show(this.id);
		} else {
			app.notification.show(this.id);
		}
	}
}


/// Example - 1: auto sync
// let noti = new Notification("Noti 1", "Hello", true);
// noti.msg = `Hello World`;



/// Example - 2: 
// let noti = new Notification("Noti 1", "Hello", false);
// noti.msg = `Hello World`;
// noti.show()
