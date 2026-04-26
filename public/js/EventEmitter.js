/**
  Example usage:
  ==============================================
    const RentMyEvent = new RentMyEventEmitter();
    RentMyEvent.on('message', (data) => {
        console.log('Received message:', data);
    });
    RentMyEvent.emit('message', 'Hello, World!'); // Output: Received message: Hello, World!

    RentMyEvent.add_action('message', (data) => {
        console.log('Received message:', data);
    });
    RentMyEvent.do_action('message', 'Hello World!');

    RentMyEvent.addFilter('uppercase', (data) => data.toUpperCase());
    const modifiedData = RentMyEvent.apply_filters('uppercase', 'Some text',);
    console.log(modifiedData); // Output: SOME TEXT
 */
    class RentMyEventEmitter {
        constructor() {
            this.events = {};
            this.filters = {};
            this.applyable_filters = {};
            this.applyable_events = {};
        }
    
        /* ---------------------------------- */
        /*            Start Emitting          */
        /* ---------------------------------- */
    
        // on is as like document.addEventListener(eventName, callback)
        // same as this.add_action
        on(eventName, callback) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.off(eventName, callback); // stopping repeatedly call
            this.applyable_events[eventName] = callback;
            this.events[eventName].push(callback);
        }
    
        // same as this.do_action
        emit(eventName, data, useFilter=false) {
            return this.emitAsync(eventName, data, useFilter);
        }

        async emitAsync(eventName, data, useFilter=false) {
            const eventHandlers = this.events[eventName] || [];
            const allEventHandlers = this.events['*'] || [];

            let lastResult;
            for (const handler of [...eventHandlers, ...allEventHandlers]) {
                if (useFilter) {
                    lastResult = await handler(this.apply_filters(eventName, data));
                } else {
                    lastResult = await handler(data);
                }
            }

            return lastResult;
        }
    
        off(eventName, callback) {
            const eventHandlers = this.events[eventName];
            if (eventHandlers) {
                this.events[eventName] = eventHandlers.filter(handler => handler !== callback);
            }
        }
    
        off_all(eventName) {
            this.events[eventName] = [];
        }
        /* ----------- End Emitting ----------- */
    
        /* ---------------------------------- */
        /*          Start Action Hook         */
        /*          (same as Emitting)        */
        /* ---------------------------------- */


        // same as this.on
        add_action(eventName, callback) {
            this.on(eventName, callback);
        }
        
        // same as this.emit
        do_action(eventName, data, useFilter=true) {
            return this.emitAsync(eventName, data, useFilter);
        }
        
        remove_action(eventName, callback) {
            this.off(eventName, callback);
        }
    
        remove_actions(eventName) {
            this.off_all(eventName);
        }
        /* --------- End Action Hook -------- */
    
    
        /* ---------------------------------- */
        /*          Start Filter Hook         */
        /* ---------------------------------- */
        add_filter(filterName, callback) {
            if (!this.filters[filterName]) {
                this.filters[filterName] = [];
            }
            this.filters[filterName].push(callback);
        }
    
        apply_filters(filterName, data, extraData = undefined) {
            const filterCallbacks = this.filters[filterName] || [];
            this.applyable_filters[filterName] = data;

            if (data === undefined || data === null) return data;

            let filteredData = data;
            for (const callback of filterCallbacks) {
                try {
                    filteredData = callback(filteredData, extraData);
                } catch (apply_filterserror) {
                    console.error({ apply_filterserror, filterName, data });
                }
            }

            return filteredData;
        }
    
        remove_filter(filterName, callback) {
            const filterCallbacks = this.filters[filterName];
            if (filterCallbacks) {
                this.filters[filterName] = filterCallbacks.filter(handler => handler !== callback);
                if(!this.filters[filterName]) delete this.applyable_filters[filterName];
            }
        }
    
        remove_filters(filterName) {
            this.filters[filterName] = [];
            delete this.applyable_filters[filterName];
        }
        /* --------- End Filter Hook -------- */
    
        clearAll(){
            this.events = {};
            this.filters = {};
        }
        
    }
    
globalThis.RentMyEvent = new RentMyEventEmitter(); 