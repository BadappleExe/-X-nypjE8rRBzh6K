function V(s,P){const w=t();return V=function(m,z){m=m-0xa1;let Y=w[m];return Y;},V(s,P);}function t(){const p=['543636SFDxwV','TestSet','padStart','exports','\x20/\x20','Pow','723068SUJqcW','OpName','\x20=\x20_ENV[','\x20=\x20-R','\x20goto\x20','goto\x20','\x20=\x20R','SetTable','\x20=\x20#R','substring','\x20^\x20',']\x20=\x20','\x20=\x20not\x20R','\x20=\x20Upvalues[',']\x20=\x20R','Jmp','nil','Mul','Unm','Len','log','\x20->\x20R','1919384WuRUVX','string','Move','\x20%\x20','151987SVvyIa','arg','Upvalues[','Instructions','15AsnDnY','GetUpval','Call','5425442aErkuL','94098DiIEOe','Div','\x20=\x20','Parameters','\x20*\x20','end','7KYIxha','_ENV[','Registers','GetTable',']\x20=>\x20','object','18YeivSe','if\x20',';\x20goto\x20','\x20+\x20','Concat','Add','\x20-\x20','Test','Mod','440270cuWxAe','SetGlobal','Prototypes','\x20..\x20R','\x20=\x20nil','function\x20func','length','Constants','LoadNil','\x20|\x20','\x09.const\x20','boolean','15VtuMDu','NewTable','repeat','Self'];t=function(){return p;};return t();}const K=V;(function(s,P){const J=V,w=s();while(!![]){try{const m=parseInt(J(0xb8))/0x1+-parseInt(J(0xc0))/0x2*(-parseInt(J(0xe1))/0x3)+-parseInt(J(0xeb))/0x4+-parseInt(J(0xbc))/0x5*(-parseInt(J(0xe5))/0x6)+parseInt(J(0xc6))/0x7*(parseInt(J(0xb4))/0x8)+parseInt(J(0xcc))/0x9*(-parseInt(J(0xd5))/0xa)+-parseInt(J(0xbf))/0xb;if(m===P)break;else w['push'](w['shift']());}catch(z){w['push'](w['shift']());}}}(t,0x216e2));let get_const_str=function(s,P){const S=V,w=s[P];switch(typeof w){case S(0xe0):return String(w);case'number':return w;case S(0xb5):return'\x22'+w+'\x22';case S(0xcb):return S(0xae);}},get_operation=function(s,P){const M=V,w=s[M(0xdc)];let m=function(z){return z>0xff?get_const_str(w,z-0x100):'R'+z;};switch(P['OpName']){case M(0xb6):return'R'+P['A']+'\x20=\x20R'+P['B'];case'LoadK':return'R'+P['A']+'\x20=\x20'+get_const_str(w,P['B']);case'LoadBool':return'R'+P['A']+M(0xc2)+String(Boolean(P['B']))+'\x20'+(P['C']!=0x0?M(0xce)+(P['PC']+0x2):'');case M(0xdd):let z='';for(let G=P['A']+0x1;G<P['A']+P['B'];G++){z+='R'+G+',\x20';}z=z['substring'](0x0,z[M(0xdb)]-0x2);return z+M(0xd9);case M(0xbd):return'R'+P['A']+M(0xab)+P['B']+']';case'GetGlobal':return'R'+P['A']+M(0xed)+get_const_str(w,P['B'])+']';case M(0xc9):return'R'+P['A']+M(0xa4)+P['B']+'['+m(P['C'])+']';case'SetUpval':return M(0xba)+P['B']+M(0xac)+P['A'];case M(0xd6):return M(0xc7)+get_const_str(w,P['B'])+']\x20=\x20R'+P['A'];case M(0xa5):return'R'+P['A']+'['+m(P['B'])+M(0xa9)+m(P['C']);case M(0xe2):return'R'+P['A']+'\x20=\x20{}';case M(0xe4):return'R'+(P['A']+0x1)+M(0xa4)+P['B']+';\x20R'+P['A']+M(0xa4)+P['B']+'['+m(P['C'])+']';case M(0xd1):return'R'+P['A']+'\x20=\x20'+m(P['B'])+M(0xcf)+m(P['C']);case'Sub':return'R'+P['A']+'\x20=\x20'+m(P['B'])+M(0xd2)+m(P['C']);case M(0xaf):return'R'+P['A']+'\x20=\x20'+m(P['B'])+M(0xc4)+m(P['C']);case M(0xc1):return'R'+P['A']+M(0xc2)+m(P['B'])+M(0xe9)+m(P['C']);case M(0xd4):return'R'+P['A']+M(0xc2)+m(P['B'])+M(0xb7)+m(P['C']);case M(0xea):return'R'+P['A']+M(0xc2)+m(P['B'])+M(0xa8)+m(P['C']);case M(0xb0):return'R'+P['A']+M(0xa1)+P['B'];case'Not':return'R'+P['A']+M(0xaa)+P['B'];case M(0xb1):return'R'+P['A']+M(0xa6)+P['B'];case M(0xd0):return'R'+P['A']+M(0xa4)+P['B']+M(0xd8)+P['C'];case M(0xad):return M(0xa3)+(P['PC']+P['B']+0x1);case'Eq':return M(0xcd)+m(P['B'])+'\x20'+(P['A']==0x0?'==':'~=')+'\x20'+m(P['C'])+M(0xa2)+(P['PC']+0x2);case'Lt':return M(0xcd)+m(P['B'])+'\x20'+(P['A']==0x0?'<\x20':'>\x20')+'\x20'+m(P['C'])+M(0xa2)+(P['PC']+0x2);case'Le':return'if\x20'+m(P['B'])+'\x20'+(P['A']==0x0?'<=':'>=')+'\x20'+m(P['C'])+'\x20goto\x20'+(P['PC']+0x2);case M(0xd3):return'';case M(0xe6):return'';case M(0xbe):let Y='';if(P['C']==0x0)Y+='R'+(P['A']+0x1)+'\x20->\x20???\x20=\x20';else{if(P['C']==0x1){}else{for(let E=P['A'];E<P['A']+P['C']-0x1;E++){Y+='R'+E+',\x20';}Y=Y[M(0xa7)](0x0,Y['length']-0x2),Y+=M(0xc2);}}Y+='R'+P['A']+'(';if(P['B']==0x0)Y+='R'+P['A']+M(0xb3)+s[M(0xc8)];else{if(P['B']==0x1){}else{for(let R=P['A']+0x1;R<P['A']+P['B'];R++){Y+='R'+R+',\x20';}Y=Y['substring'](0x0,Y['length']-0x2);}}return Y+')';}};module[K(0xe8)]=function(s){const l=K;let P=0x1;console[l(0xb2)]('\x20');let w=function(m,z){const W=l,Y='\x09'[W(0xe3)](z),G=P;P+=0x1,console[W(0xb2)](Y+(W(0xda)+G+'('+Array['from']({'length':m[W(0xc3)]},(A,D)=>W(0xb9)+(D+0x1))['join'](',\x20')+')')),console[W(0xb2)]();for(let A=0x0;A<m[W(0xdc)][W(0xdb)];A++){let D=m['Instructions'][A];console[W(0xb2)](Y+(W(0xdf)+get_const_str(m[W(0xdc)],A)));}console[W(0xb2)]();let E=-0x1,R=String(m[W(0xbb)]['length'])[W(0xdb)];for(let r=0x0;r<m[W(0xbb)][W(0xdb)];r++){let Z=m['Instructions'][r],h=Z['OpName']['length'];h>E&&(E=h);}for(let H=0x0;H<m['Instructions'][W(0xdb)];H++){let u=m[W(0xbb)][H],q=get_operation(m,u);q=q?W(0xde)+q:'',console[W(0xb2)](Y+('\x09['+String(H)[W(0xe7)](R,'0')+W(0xca)+u[W(0xec)][W(0xe7)](E)+':\x20{\x20\x20\x20-,\x20\x20\x20-,\x20\x20\x20-\x20}'+q));}console[W(0xb2)]();for(let B=0x0;B<m[W(0xd7)]['length'];B++){w(m[W(0xd7)][B],z+0x1);}console[W(0xb2)](Y+W(0xc5));};w(s,0x0);};