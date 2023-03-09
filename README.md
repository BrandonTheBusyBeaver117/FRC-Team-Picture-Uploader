# FRC-Team-Picture-Uploader

A script to take team images from pit scouting, and upload them to a Cloudinary account

## How To Use:
1. Select a google form and click the 3 dots in the upper-right corner
2. Ensure that your questions contain the correct identification words so that the script can find the question and its data
    * The default id word for the image is: "photo"
    * The default id word for the team number is: "team #"
3. For the photo question, edit the question and click on "View Folder" in the bottom right
    * Select the folder, and change its sharing permissions
    * The viewing permissions should be set to "Anyone with the link can view"
    * Without this, the images will not be able to be uploaded 
4. Click on "Script editor"
5. Copy and paste "Uploader.gs" into this new file
    * Feel free to name to the file and project
6. **Change all the Cloudinary presets to your own individual presets**
    * **The script will not work without this!**
7. On the left, click the clock icon, the triggers tab
8. On the bottom right, click on "Add Trigger"
9. For the "which function to run" question, select "onSubmit"
10. Head should be fine for "which deployment should run"
    * Note that this means that whenever you make changes to the file, you immediately deploy it
11. For the "event source" question, select "From form"
12. For the "event type" question, select "On form submit"
13. (Optional) You can change the error notification settings if you like
14. The trigger should now look like this, and you can hit "Save" in the bottom right
![Trigger image](./trigger.png)
15. Congrats, you're all set!

## How to customize the script
In your new file, you can change the onSubmit function to look out for different types of data

You can also change the imageUpload function to upload different types of data to Cloudinary