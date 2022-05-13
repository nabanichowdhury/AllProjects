#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n,x;
    cin>>n;
    cin>>x;
    int an=[n];
    for (int a=0;a<n;a++){
        cin>>an[a];
        
    }
    for(int i=0;i<=n;i++){
        if(x<=an[i]){
            cout<<x;
        }
        else{
            cout<<Impossible;
        }
        
    }
    
   
    return 0;
}
