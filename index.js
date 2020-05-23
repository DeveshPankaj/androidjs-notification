
// Notification Class
class Notification {
	constructor(title, msg, syncWithJs = false) {
		(window).notificationCounter = (window).notificationCounter || 1;
		this.data = { title, msg };
		this.id = this.getRendomNo();
		this.syncWithJs = syncWithJs;
		this.isVisible = false;

		// for mobile
		if(isMobile()) {
			if(this.syncWithJs) {
				(window).android.initNotification(this.data.title, this.data.msg);
				(window).android.showNotification(this.id);
				this.isVisible = true;
			}
		}

		// for browser
		else {
			if (!(window).Notification) {
		        console.error('Browser does not support notifications.');
		    } else if(this.syncWithJs) {
		    	let _this = this;
		    	window.Notification.requestPermission().then(function (p) {
	                if (p === 'granted') {
	                    // show notification here
	                    var notify = new window.Notification(_this.data.title, {
	                        body: _this.data.msg,
	                        icon: '/favicon.ico',
	                    });
	                } else {
	                    console.log('User blocked notifications.');
	                }
	            }).catch(function (err) {
	                console.error(err);
	            });
		    }
		}
		
	}

	// get next notification unique id
	getRendomNo() {
		return (window).notificationCounter++;
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
		if(isMobile() && this.syncWithJs) {
			(window).android.initNotification(this.data.title, this.data.msg);
			this.show();
		} else if(this.syncWithJs) {
			let _this = this;
	    	window.Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new window.Notification(_this.data.title, {
                        body: _this.data.msg,
                        icon: '/favicon.ico',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
		}
	}

	// set current notifacation msg
	set msg (value) {
		this.data.msg = value;
		if(isMobile() && this.syncWithJs) {
			(window).android.initNotification(this.data.title, this.data.msg);
			this.show();
		} else if(this.syncWithJs) {
			let _this = this;
	    	window.Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new window.Notification(_this.data.title, {
                        body: _this.data.msg,
                        icon: '/favicon.ico',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
		}
	}

	// show notifiaction on screen
	show() {
		if(isMobile()) {
			if(!this.isVisible) {
				this.isVisible = true;
				(window).android.initNotification(this.data.title, this.data.msg);
				(window).android.showNotification(this.id);
			} else {
				(window).android.showNotification(this.id);
			}
		} else {
			let _this = this;
	    	window.Notification.requestPermission().then(function (p) {
                if (p === 'granted') {
                    // show notification here
                    var notify = new window.Notification(_this.data.title, {
                        body: _this.data.msg,
                        icon: '/favicon.ico',
                    });
                } else {
                    console.log('User blocked notifications.');
                }
            }).catch(function (err) {
                console.error(err);
            });
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
