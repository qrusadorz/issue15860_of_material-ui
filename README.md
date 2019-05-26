# issue15860_of_material-ui
this is a code for issue 15860 of Material-UI.


## Reproduction procedure

I use Firebase Hosting for deployment.  
You do not need to be Firebase Hosting if you can run live URL inspection from the Google Search Console.

1. npm install
2. npm start
3. Make sure that there are no problems.
4. npm run build
5. firebase init
6. firebase deploy
7. Run a live test of URL inspection from Google Search Console.

You should not be able to get a snapshot.  
To take a snapshot, please delete the Grid component of App.js.

