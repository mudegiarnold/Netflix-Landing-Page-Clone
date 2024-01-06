// script.js

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content-item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.id;
            hideAllTabs();
            showTabContent(tabId);
            highlightTab(tabId);
        });
    });

    function hideAllTabs() {
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('show');
        });
    }

    function showTabContent(tabId) {
        const tabContent = document.getElementById(tabId + '-content');
        if (tabContent) {
            tabContent.classList.add('show');
        }
    }

    function highlightTab(tabId) {
        tabs.forEach(tab => {
            tab.classList.remove('tab-border');
        });
        const tab = document.getElementById(tabId);
        if (tab) {
            tab.classList.add('tab-border');
        }
    }
});
